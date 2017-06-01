import { User } from '../src/User';

let user1 = new User(),
    user2 = new User();

user1.name = 'Alex';
user1.age = 20;
user1.email = 'alex@example.com';
user1.additionalData = {
    house: true,
    car: true
};

user2.name = 'Andrew';
user2.age = 21;
user2.email = 'andrew@example.com';
user2.additionalData = {
    house: true,
    car: false
};

test('check user1 main data', () => {
    expect(user1.name).toEqual('Alex');
    expect(user1.age).toEqual(20);
    expect(user1.email).toEqual('alex@example.com');
});

test('check user2 main data', () => {
    expect(user2.name).toEqual('Andrew');
    expect(user2.age).not.toEqual(20);
    expect(user2.email).toEqual('andrew@example.com');
});

test('it should be passed even if receivedNames contains additional elements', () => {
    let receivedNames = ['Alex', 'Andrew', 'Nick'],
        expectedNames = [user1.name, user2.name];
    expect(receivedNames).toEqual(expect.arrayContaining(expectedNames));
});

test('it shouldn\'t be passed if receivedNames does not contain expectedNames elements', () => {
    let receivedNames = ['Andrew', 'Nick'],
        expectedNames = [user1.name, user2.name];
    expect(receivedNames).not.toEqual(expect.arrayContaining(expectedNames));
});

test('user1 and user2 additional datas have the same properties', () => {
    expect(user1).toHaveProperty('additionalData.house');
    expect(user1).toHaveProperty('additionalData.car');

    expect(user2).toHaveProperty('additionalData.house');
    expect(user2).toHaveProperty('additionalData.car');
});

test('user1 and user2 additional datas are not the exact same', () => {
    expect(user1.additionalData).not.toBe(user2.additionalData);
});
