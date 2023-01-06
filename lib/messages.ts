import client from './prismadb';

export async function addMsg(input: string) {
  try {
    const newMsg = await client.message.create({
      data: {
        body: input,
        userName: "sf",
        profileImg: "f"
      }
    });
    return { newMsg }
  } catch (error) { 
    return { error }
  }
}

export async function getMessages() {
  try {
    const messages = await client.message.findMany()
    return { messages }
  } catch (error) {
    return { error }
  }
}

export async function getUserById(id: string) {
  try {
    const user = await client.user.findUnique({
      where: { id },
    })
    return { user }
  } catch (error) {
    return { error }
  }
}


