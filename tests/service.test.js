var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app').app
var should = chai.should();

chai.use(chaiHttp);

describe('resources', function () {

    it('should GET list all users', function (done) {
        chai.request(server)
            .get('/api/user')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('describtion');
                done();
            });
    });

    it('should insert users data POST', function (done) {
        chai.request(server)
            .post('/api/user')
            .send({ "title": "sailendra", "description": "test", "owner": 1 })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
    it('should update users data PUT', function (done) {
        chai.request(server)
            .put('/api/user/1')
            .send({ "title": "sailendra", "description": "test", "owner": 1 })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });

    it('should delete users data DELETE', function (done) {
        chai.request(server)
            .delete('/api/user/236')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});