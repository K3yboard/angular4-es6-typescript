import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('lógica insert - Concessionaria')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('lógica update - Concessionaria')
        return true
    }

    remover(id: number): Concessionaria {
        console.log('lógica remove - Concessionaria')
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('lógica select - Concessionaria')
        return new Concessionaria('', [])
    }

    selecionarTodos(): [any] {
        console.log('lógica getAll - Concessionaria')
        return [new Concessionaria('', [])]
    }
}