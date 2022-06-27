require('dotenv').config()

const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.API_KEY)
/* const helpMessage = `
Selamat datang di ChatPedia, silahkan pilih menu di bawah ini:
/start memulai bot
`
*/

bot.command('start', (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, `
    Selamat datang di ChatPedia, silahkan pilih menu di bawah ini:
    `,{
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Quiz', callback_data: 'one' },
                ]
            ]
        }
    })
})

bot.action('one', ctx => {
    ctx.reply(`
    3,4,6,7,9,10,.....
    berapa angka berikut nya?
    A. sebelas
    B. dua belas
    C. tiga belas
    D. empat belas
    `, {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'A', callback_data: 'sebelas' },
                    {text: 'B', callback_data: 'duabelas' },
                    {text: 'C', callback_data: 'tigabelas' },
                    {text: 'D', callback_data: 'empatbelas' },
                ]
            ]
        }
    })
})

bot.action('sebelas', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('tigabelas', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('empatbelas', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('duabelas', ctx => {ctx.reply(`
benar, yuk lanjut!
Anaknya Sri adalah Ibunya Anak Perempuanku. Jadi aku siapanya Sri ?
A. Anaknya
B. Ibunya
C. Neneknya
D. Tantenya
`, {
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'A', callback_data: 'anak' },
                {text: 'B', callback_data: 'ibu' },
                {text: 'C', callback_data: 'nenek' },
                {text: 'D', callback_data: 'tante' },
            ]
        ]
    }
})})

bot.action('ibu', ctx => {ctx.reply('salah, yang benar adalah A. /start mulai dari 0 yahhhhh')})
bot.action('nenek', ctx => {ctx.reply('salah, yang benar adalah A. /start mulai dari 0 yahhhhh')})
bot.action('tante', ctx => {ctx.reply('salah, yang benar adalah A. /start mulai dari 0 yahhhhh')})
bot.action('anak', ctx => {ctx.reply(`
benar, yuk lanjut!
Hp apa yang disukai oleh wanita ?
A. Oppo
B. Iphone
C. Realme
D. Vivo
`,{
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'A', callback_data: 'oppo' },
                {text: `B`, callback_data: 'iphone' },
                {text: 'C', callback_data: 'realme' },
                {text: 'D', callback_data: 'vivo' },
            ]
        ]
    }
})})

bot.action('oppo', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('realme', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('vivo', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('iphone', ctx => {ctx.reply(`
benar, yuk lanjut!
Alat indra yang paling peka untuk membedakan benda panas dan benda dingin adalah. . .
A. Hidung
B. Mata
C. Kulit
D. Telinga
`,{
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'A', callback_data: 'hidung' },
                {text: 'B', callback_data: 'rambut' },
                {text: 'C', callback_data: 'kulit' },
                {text: 'D', callback_data: 'telinga' },
            ]
        ]
    }
})})

bot.action('rambut', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('hidung', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('telinga', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('kulit', ctx => {ctx.reply(`
benar, yuk lanjut!
Bayi tidak dapat langsung berjalan karena mereka tidak punya.
A. Tubuh Gemuk
B. Tulang Kuat
C. Otak Cerdas
D. Imunitas
`,{
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'A', callback_data: 'gemuk' },
                {text: 'B', callback_data: 'tulang' },
                {text: 'C', callback_data: 'otak' },
                {text: 'D', callback_data: 'imun' },
            ]
        ]
    }
})})

bot.action('gemuk', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('tulang', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('otak', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('imun', ctx => {ctx.reply(`
benar, yuk lanjut!
Benalu adalah sejenis tanaman.
A. Benalu
B. Parasit
C. Saprofit
D. Serophyt
`,{
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'A', callback_data: 'benalu' },
                {text: 'B', callback_data: 'parasit' },
                {text: 'C', callback_data: 'sapro' },
                {text: 'D', callback_data: 'sero' },
            ]
        ]
    }
})})

bot.action('benalu', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('sapro', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('sero', ctx => {ctx.reply('salah, yang benar adalah B. /start mulai dari 0 yahhhhh')})
bot.action('parasit', ctx => {ctx.reply(`
benar, yuk lanjut!
Hewan pemakan segala disebut
A. Herbivora
B. Karnivora
C. Omnivora
D. Insektivora
`,{
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'A', callback_data: 'herbi' },
                {text: 'B', callback_data: 'karni' },
                {text: 'C', callback_data: 'omni' },
                {text: 'D', callback_data: 'inse' },
            ]
        ]
    }
})})

bot.action('herbi', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('karni', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('inse', ctx => {ctx.reply('salah, yang benar adalah C. /start mulai dari 0 yahhhhh')})
bot.action('omni', ctx => {ctx.reply(`
benar, yuk lanjut!
SEA Games yang di adakan pada tahun 1997 bertempat di negara?
A. Indonesia
B. Thailand
C. Singapura
D. Vietnam
`, {
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'A', callback_data: 'indo' },
                {text: 'B', callback_data: 'thai' },
                {text: 'C', callback_data: 'singapura' },
                {text: 'D', callback_data: 'viet' },
            ]
        ]
    }
})})

bot.action('viet', ctx => {ctx.reply('salah, yang benar adalah A. /start mulai dari 0 yahhhhh')})
bot.action('thai', ctx => {ctx.reply('salah, yang benar adalah A. /start mulai dari 0 yahhhhh')})
bot.action('singapura', ctx => {ctx.reply('salah, yang benar adalah A. /start mulai dari 0 yahhhhh')})
bot.action('indo', ctx => {ctx.reply(`
Benar, terima kasih telah menjawab seluruh kuis yang tidak berfaedah ini. 
Semoga bisa mengurangi rasa kegabutan anda
`, {
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'Oke', callback_data: 'ok' },
            ]
        ]
    }
})})

bot.action('ok', ctx => {ctx.reply('bye!')})

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()