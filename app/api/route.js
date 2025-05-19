import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  
    const client = await clientPromise;
    const db = client.db("Wordora");
    const collection = db.collection("Readers");
    
    const body = await request.json();
   
    await collection.insertOne({
      title:body.title,
      text:body.text,
      data:"success",
      added:"successfully"
    });
    console.log("data added successfully");
    return Response.json({ success: true, message: "Data added successfully" });

}