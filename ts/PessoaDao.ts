import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('lógica insert - Pessoa')
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('lógica update - Pessoa')
        return true
    }

    remover(id: number): Pessoa {
        console.log('lógica remove - Pessoa')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('lógica select - Pessoa')
        return new Pessoa('', '')
    }

    selecionarTodos(): [any] {
        console.log('lógica getAll - Pessoa')
        return [new Pessoa('', '')]
    }
}
