import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


const getProducts = async () => {
    try {
        const products = await prisma.product.findMany();
        return products;
    } catch (error) {
        throw error;
    }
}

const createProduct = async (name: string, price: number) => {
    try {
        const productCreated = await prisma.product.create({
            data: { name, price }
        })
        console.log(productCreated)
        
        return productCreated;
    } catch (error) {
        throw error;
    }
}

const getProductById = async (id: number) => {
    try {
        const product = await prisma.product.findUniqueOrThrow({
            where: {
                id: id
            },
        })
        return product;
    } catch (error) {
        throw error
    }
}

const updateProductById = async (id: number, name: string, price: number) => {
    try {
        await prisma.product.findUniqueOrThrow({ where: { id } })

        if (!name || !price) {
            throw new Error("Name or price must be provided!");
        }

        const updatedUser = await prisma.product.update({
            where: { id },
            data: {
                name,
                price
            }
        })

        return updatedUser;

    } catch (error) {
        throw error;
    }
}

const deleteUserById = async (id: number) => {
    try {
        const deletedUser = await prisma.product.delete({
            where: { id }
        })
        return deletedUser;
    } catch (error) {
        throw error;
    }
}

export { getProducts, createProduct, getProductById, updateProductById, deleteUserById };