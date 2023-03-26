let SHEETS_ID = '1HYRkBI39lTzKE_GN67_Maa2sAH9FOhhrikDwtaLxnBg'
let SHEETS_TITLE = 'englishToPortuguese'
let SHEETS_RANGE= 'A1:B100'

let FULL_URL_english = ('https://docs.google.com/spreadsheets/d/' + SHEETS_ID + '/gviz/tq?sheet=' + SHEETS_TITLE + '&range=' + SHEETS_RANGE)

export const words = []

export const generateObjectArray = (set) => {

        fetch(FULL_URL_english).then(res => res.text()).then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2))

            let dataJson = data.table.rows

            for(let [i, value] of dataJson.entries()) {

                    words[i] = {}
                    words[i].english = value?.c[0].v
                    // value?.c[1].v / ? === Optional Chaining Operator
                    words[i].portuguese = value?.c[1].v
            }

            set(words)
        })
}


