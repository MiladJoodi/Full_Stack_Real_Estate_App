"use server"

import prisma from "../prisma"

export async function getUserById(id: string) {
    return await prisma.user.findUnique({
        where: {
            id,
        }
    })
}