

function hello(){

    const results=["That's sus",
    "That may happen",
    "Why would you waste a wish on that??",
    "Okay, let's make that happen",
    "I though you'd ask something naughty",
    "This ain't gonna happen for sure",
    "This is something that's definitely gonna happen",
    "That's a weird wish",
    "Shooting star flew by, your wish will come true",
    "Seriously? Make a better wish",
    "I was waiting for this wish",
    "Be a little more creative please =_=",
    "Ohh, I would wish for that too",
    "That's so boring",]

    const number=Math.floor(Math.random() * 14)
    const result=results[number]

    document.getElementById("result").innerText= result
}