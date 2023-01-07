import client from './prismadb';

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


