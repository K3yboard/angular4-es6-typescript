import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {

    nomeTabela: string = ''

    inserir(object: T): boolean {
        console.log('lógica insert - Dao')
        return true
    }

    atualizar(object: T): boolean {
        console.log('lógica update - Dao')
        return true
    }

    remover(id: number): T {
        console.log('lógica remove - Dao')
        return Object()
    }

    selecionar(id: number): T {
        console.log('lógica select - Dao')
        return Object()
    }

    selecionarTodos(): [any] {
        console.log('lógica getAll - Dao')
        return [Object()]
    }
}