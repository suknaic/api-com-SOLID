export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

//  DTO = OBJETO DE TRASNFERENCIA DE DADOS
//  e um padrão de projeto para o transporte de dados entre diferentes camadas do software
// nesse exemplo tranferir da camada de dominio para de infra
