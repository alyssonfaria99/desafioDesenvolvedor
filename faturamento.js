const detalharFaturamento = faturamento => {
    let menorFaturamento = Infinity;
    let maiorFaturamento = 0;
    let soma = 0;
    let diasComFaturamento = 0;
    let diasAcimaMedia = 0;

    for ( let i = 0; i < faturamento.length; i++){
        if ( faturamento[i] > 0){
            if ( faturamento[i] < menorFaturamento){
                    menorFaturamento = faturamento[i]
            }
            if ( faturamento[i] > maiorFaturamento){
                    maiorFaturamento = faturamento[i]
            }
                soma += faturamento[i]
                diasComFaturamento++
        }
    }

        let media = soma / diasComFaturamento

    for ( let i = 0; i < faturamento.length; i++){
        if ( faturamento[i] > media){
            diasAcimaMedia++
        }
    }
    return console.log(`Menor faturamento: ${menorFaturamento}\nMaior faturamento: ${maiorFaturamento}\nDias acima da média: ${diasAcimaMedia}`)
}

const faturamento = []
for ( let i = 0; i < 365; i++){
    faturamento.push(Math.random() * 1000)
}

detalharFaturamento(faturamento)