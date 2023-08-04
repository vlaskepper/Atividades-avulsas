def mostrarNumero():
    print("Escreva um menor ou igual a 100: ")
    
    numero_valido = True
    
    while(numero_valido == True):
        try:
            numero = int(input())
            if (numero < 0):
                print("O número que você digitou é menor que 0")
            elif (numero%2 == 0 and numero < 100):
                print("O número é par")
                print("O número é divisível por 2 ou 3")
                numero_valido = False
            elif (numero%3 == 0 and numero < 100):
                print("O número é divisível por 2 ou 3")
                numero_valido = False
            elif (numero <= 100 and numero > 0):
                print("O numero que voce escolheu foi: " + str(numero))
                numero_valido = False
            else:
                print("Número é maior que 100")
        except:
            print("Precisa digitar um número inteiro")
            
mostrarNumero()