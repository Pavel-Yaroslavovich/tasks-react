const json = [
    {
        name: 'Саша',
        lastName: 'Иванов',
        age: '21',
        workPlace: 'СНГ'
    },
    {
        name: 'Ваня',
        lastName: 'Дубков',
        age: '33',
        workPlace: 'Газпром'
    },
    {
        name: 'Гриша',
        lastName: 'Петрик',
        age: '19',
        workPlace: 'Лукоил'
    },
    {
        name: 'Кирилл',
        lastName: 'Фарк',
        age: '26',
        workPlace: 'Яндекс'
    },
    {
        name: 'Коля',
        lastName: 'Коляныч',
        age: '44',
        workPlace: 'СНТ'
    }
]

export const getData = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(JSON.stringify(json))
    }, 1000)
})