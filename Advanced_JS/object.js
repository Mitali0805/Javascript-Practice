const PARAMETERS_IN_RAAS_DB = {
    MAILING_ADDRESS: "mailingAddress",
    PHONE: "phoneNumbers",
    EMAIL_ADDRESS: "emailAddress"
}

// const key = Object.keys(PARAMETERS_IN_RAAS_DB)
// console.log(key)
let mail = 'MAILING_ADDRESS'
console.log('****', PARAMETERS_IN_RAAS_DB[mail])

const parameters = [
    "EMAIL_ADDRESS",
    "PHONE",
    "MAILING_ADDRESS"
]

const param = [
    "EMAIL_ADDRESS",
    "USER_TIER",
    "TIER_SCORE",
    "REWARD_CREDITS"
]

const data = undefined ?? param
console.log(data)
