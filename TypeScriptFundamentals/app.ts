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

interface SubscriberInterface
{
    readonly dbId: number,
    email: string,
    userid: number,
    googleid: string,
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
};

interface SubscriberInterface
{
    githubToken: string
}; //Adding a new property to existing interface

interface SubscriberRoleInterface extends SubscriberInterface
{
    role: "admin" | "ta" | "learner"
}

const hitesh: SubscriberRoleInterface = {
    dbId: 22, email: "h@h.com", userid: 2211,
    role: "admin",
    githubToken: "github",
    googleid: "samplegoogleid",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: string, off: number) => {
        return 10
    }
};
hitesh.email = "h@hc.com";


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

