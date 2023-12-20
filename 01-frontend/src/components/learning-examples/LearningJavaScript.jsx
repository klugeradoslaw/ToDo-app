export default function LearningJavaScript() {

    const person = {
        name: 'Radek xd',
        addres: {
            street: '123 xd beka',
            city: 'rumia'
    },
    profiles: ['twitter', 'facebook'],
    printProfile: () => {
        console.log(person.profiles[1])
    }
    }

    return (
    <div>
        <div>{person.name}</div>
        <div>{person.addres.city}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
    </div>
    )
}