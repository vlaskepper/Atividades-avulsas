produtos = ["arroz","feijão","macarrão","carne"]


def pesquisar_produtos():
    for item in produtos:
        print(item)

def adiciona_produto(produto):
    if (produto in produtos): 
        print ("Produto já existe")
    else:
        produtos.append(produto)
                
def remove_produto(produto):
    if (produto in produtos):
        produtos.remove(produto)
    else:
        print ("Produto não existe")

while True:

    opcao=int(input("Escolha a opção desejada:"

          '\n[1] Pesquisar produtos'

          '\n[2] Adicionar Produto'

          '\n[3] Remover Produto'

          '\n[0] Sair'

          '\nOpção: '))
    
    if opcao == 0:
        print("Até a próxima!")
        break
    
    if opcao not in [1,2,3,4]:
        print("Opção inexistente!")
        continue
        
    if opcao == 1:
        pesquisar_produtos()
        
    if opcao == 2:
        produto = (input("Digite o produto que deseja adicionar"))
        adiciona_produto(produto)
        
    if opcao == 3:
        produto = (input("Digite o produto que deseja remover"))
        remove_produto(produto)