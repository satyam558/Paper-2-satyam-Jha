import Books from "../model/librarySchema.js"


const insert = async (req, res) => {
    try {
        const { title, author, genre, isbn, year } = req.body;
        await Books.create({ title, author, genre, isbn, year })
        .then(() => {
            res.send("book added successfully");
        })
        .catch((err) => { console.log(err) })
    } catch (error) {
        console.log(error)
    }
}

const view = async (req, res) => {
    await Books.find()
    .then((result) => res.json({
        success: 'true',
        records: result
    }))
}

const trash = async (req, res) => {
    const { id } = req.query;
    console.log(id)
    await Books.findByIdAndDelete(id)
    .then(() => {
        res.send("book deleted successfully");
    })
    .catch((err) => { console.log(err) })
}

const edit = async (req,res)=>{
    const {id}= req.query;
    const { title} = req.body;
    await Books.findByIdAndUpdate(id,{ title})
    .then(() => {
        res.send("book updated successfully");
     })
     .catch((err) => { console.log(err) })
}


export { insert, view, trash,edit };