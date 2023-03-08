//routes regarding simple events budget plans
//just so unlogged users have something to navigate on

module.exports = app => {
    app.post('/api/event', (req, res)=> {
        const {title, participantsNumber, OnDemandCard} = req.body;
    });
};