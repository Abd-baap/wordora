// import { currentUser } from "@clerk/nextjs/server";
import clientPromise from "@/lib/mongodb";
import { currentUser } from "@clerk/nextjs/server";
export async function GET() {
  
    const client = await clientPromise;
    const db = client.db("Wordora");
    const collection = db.collection("Readers");
    
    
    const user = await currentUser();
    if (!user || !user.id) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    
    const body = await collection.find({ user: user.id }).toArray();
if(body.length>0){
   return Response.json({body:body})
}
else{ return Response.json({body:[],succedd:"false"}) 
}
}
