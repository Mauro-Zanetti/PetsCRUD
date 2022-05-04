using { PetShop } from '../db/schema';

service CatalogService  {
    entity Pets as projection on PetShop.Pets;
    entity Vets as projection on PetShop.Vets;
    entity Owners as projection on PetShop.Owners;

    action TestAction(name: String, last: String, ID : Integer) returns String;
    function TestFunction(name: String) returns String;
}