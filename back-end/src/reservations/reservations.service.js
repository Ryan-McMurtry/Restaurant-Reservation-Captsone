const knex = require("../db/connection");

const list = (reservation_date) => {
    if(reservation_date) {
        return knex("reservations")
        .where({ reservation_date, status: "booked" })
        .orderBy("reservation_time");
    }
}

const create = (newReservation) => {
    return (
      knex("reservations")
        .insert(newReservation, "*")
        .then((createdReservations) => createdReservations[0])
    );

}

const read = (reservation_id) => {
    return knex("reservations")
    .where({reservation_id})
    .first()
}


module.exports = {
    list,
    create,
    read
}