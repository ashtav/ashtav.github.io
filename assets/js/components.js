const doc = document

// --- BUTTON
const btn = doc.querySelectorAll('.btn-primary')

btn.forEach(el => {
    let _class = "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 focus:bg-blue-700"

    _class.split(' ').forEach(c => {
        el.classList.add(c)
    })

    
})
