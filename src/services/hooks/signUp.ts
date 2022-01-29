import { api } from "../";

type SignUpRequest = {
  name: string;
  fantasyName: string;
  document: string;
  email: string;
  phone: string;
  webhook: string;
};

export async function signUp({
  name,
  fantasyName,
  document,
  email,
  phone,
  webhook,
}: SignUpRequest): Promise<void> {
  await api.post("/companys/", {
    name,
    fantasyName,
    document,
    email,
    phone,
    webhook,
  });
}
