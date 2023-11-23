export default function Handler(req,res){
    console.log("hello");
    res.status(200).json(
        {
            'firstName' : 'sothea',
            'lastName': 'ban',

        }
    )
}