import { dato } from './index'

export const data = () => {

    const person = dato.map((img)=> ({
    id: img.id,
    firstName: img.firstName,
    lastName: img.lastName,
    title: img.title,
    family: img.family,
    image: img.imageUrl
    }));

    return person;
}
