// import { currentUser } from "@clerk/nextjs/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  
    const client = await clientPromise;
    const db = client.db("Wordora");
    const collection = db.collection("Readers");
    
    
    const body = await collection.find({ 
      "data":"success",
      "added":"successfully" }).toArray();
if(body.length>0){
   return Response.json({body:body})
}
else{ return Response.json({body:[],succedd:"false"}) 
}
}
