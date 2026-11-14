# FL hats

Sistema online de gestão de reformas de chapéus da FL hats (Quatá, SP).
Projeto Integrador Extensionista II, Análise e Desenvolvimento de Sistemas.

Aluno: Jean Henrique Lino dos Santos

## Sobre o projeto

A FL hats faz limpeza, diminuição de aba e personalização de chapéus. Hoje o
controle de pedidos é feito em planilhas e WhatsApp. O sistema vai centralizar
clientes, serviços e pedidos. Esta entrega é o esqueleto inicial: front-end
com Vite+ e uma API Express com a rota de verificação `/api/health`.

## Requisitos

- Node.js 20.6 ou superior
- Vite+ (`vp`) instalado

## Como rodar

```bash
git clone https://github.com/Jeanhenrique2/flhats.git
cd flhats
vp install
cp .env.example .env
```

No Windows (PowerShell), no lugar de `cp`, use `copy .env.example .env`.

Em um terminal, inicie a API:

```bash
vp run api
```

Em outro terminal, inicie o front-end:

```bash
vp dev
```

Abra http://localhost:5173. A página deve mostrar "Status da API: ok".

## Rotas da API

- `GET /api/health`: retorna `{ "status": "ok", "timestamp": "..." }`
