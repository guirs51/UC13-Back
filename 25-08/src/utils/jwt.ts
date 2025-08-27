import jwt from "jsonwebtoken";

interface Payload {
  id: number;
  email: string;
}

//playload são as informações que enviamos do nosso usuario
export const generateToken = (payload: Payload) => {
  // o metodo sign de JWt retorna o token JWT
  //enviamos as informações do usuasrio (playload)
  //o nosso secret
  //e a informação de quando expira
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN) || "1d",
  });
};

export const verifyToken = (token: string) => {
  try {
    //valida o token que estamos passando
    // se for valido, retorna as informações decodificadas do payload (no nosso caso, id e email)
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (err: any) {
    //se não for valido, retorna null
    return null;
  }
};
