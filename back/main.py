from typing import Optional

from fastapi import FastAPI,  HTTPException
from pydantic import BaseModel
from datetime import date
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
import json

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "https://localhost:4200",
    "http://localhost",
    "http://localhost:8080",
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
status= {1: 'on the complete set', 2: 'on the way', 3: 'delivered'}

fake_db_order = {}
fake_db_address = {}
fake_db_coffee = {"category":[
	{ "id": 1,"name" : "Ethiopian"},
	{ "id": 2,"name" : "Colombian"},
	{ "id": 3, "name":"Unroasted"}
]}
fake_db_delivery = {
	1: {"id": 1, "status_id": "1"}, 2: {"id": 2, "status_id": "2"},
}
print(fake_db_delivery[1])
class Order(BaseModel):
    id: int
    coffee_id: int
    package_weight: int
    date_of_shipment: date
    date_of_delivery: Optional[date] = None
    username: str
    address_id: int
    delivery_id: int

class Coffee(BaseModel):
    id: int
    type: str

class Delivery(BaseModel):
    id: int
    status_id: int

class Address(BaseModel):
    id: int
    country: str
    city: str
    street: str
    house: int     



@app.get("/orders/")
async def get_item():
    return fake_db_order

@app.get("/address/")
async def get_item():
    return fake_db_address

@app.get("/coffee/")
async def get_item():
    return fake_db_coffee

@app.get("/delivery/{item_id}", response_model=Delivery)
async def read_main(item_id: int):
    if item_id not in fake_db_delivery:
        raise HTTPException(status_code=404, detail="Item not found")
    return fake_db_delivery[item_id]

@app.put("/delivery/{item_id}")
async def create_item(item_id: int, item: Delivery):
    json_compatible_item_data = jsonable_encoder(item)
    fake_db_delivery[item.id]= (json_compatible_item_data)
    return {"id": item_id, **item.dict()}

@app.post("/delivery/")
async def create_item(item: Delivery):
    json_compatible_item_data = jsonable_encoder(item)
    fake_db_delivery[item.id]= (json_compatible_item_data)
    return item

@app.post("/orders/")
async def create_item(item: Order):
    json_compatible_item_data = jsonable_encoder(item)
    fake_db_order[item.id]= (json_compatible_item_data)
    return item

@app.post("/address/")
async def create_item(item: Address):
    json_compatible_item_data = jsonable_encoder(item)
    fake_db_address[item.id]= (json_compatible_item_data)
    return item

