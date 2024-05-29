import { AuthToken, RegisterResponseType } from "@/app/types/auth.types"
import { AccessDeniedError } from "../common/errors";


const API_URL = 'https://digitalmoney.digitalhouse.com'



export const authLogin  = async (data: object): Promise<AuthToken> => {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok){
    if (res.status === 401){
        throw new AccessDeniedError("User has no access")
    }
    throw new Error("Failed to post")
}
  return res.json();
}

export const userRegister = async (data: object): Promise<RegisterResponseType> => {
  const res = await fetch(`${API_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok){
    if (res.status === 403){
        throw new AccessDeniedError("User has no access")
    }
    throw new Error("Failed to post")
  }
  return res.json();
}
