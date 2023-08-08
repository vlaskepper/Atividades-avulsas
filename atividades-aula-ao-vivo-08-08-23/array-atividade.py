#João Filho, Vinícius Luiz e Willian Brendo
def achar_elemento(elem,arr):
    achou = False
    
    for i in range(len(arr)):
        if arr[i] == elem:
            achou = True
    
    
    
    if(achou == False):
        print("Não achamos o nome " + elem)
    else:
        print("Achamos o nome " + elem)
        
nomes = ["Marte","Violeta","Nina","Xayah","Fred"]

nome = input("Digite o nome que deseja encontrar: ")

achar_elemento(nome,nomes)