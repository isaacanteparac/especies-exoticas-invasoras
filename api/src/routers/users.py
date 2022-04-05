from fastapi import APIRouter

router = APIRouter()

@router.get("api/users", tags=["users"])
async def getUser():
    return [{"message": "this is user router"}
]