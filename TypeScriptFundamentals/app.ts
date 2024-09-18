enum Gender
{
    MALE,
    FEMALE,
    OTHER
};

type User = {
    readonly id: string | number,
    name: string,
    email: string,
    new: boolean,
    gender?: Gender
};

type admin = {
    readonly id: string | number,
    name: string,
    email: string,
    new: boolean,
    gender?: Gender,
    adminLevel: number
};

const members: (User | admin)[] = [];

//tuples
let samepleTuple: [string, string, boolean, number];
let rgb: [number, number, number] = [0, 0, 255];
// In a tuple the elements are stored in the exact same order and amount of the types mentioned 

function createUser(user: User): boolean
{
    if (user.name.includes("*"))
    {
        throw new Error("");
    }
    members.push(user);
    console.log("User created successfuly");
    return true;
}

