describe('Calculate bill' , function(){
    it('should return the cost for one call made' , function(){
        var instances = FactoryCalculateBIll();

        instances.check("call");
        assert.equal(instances.total(),"2.75");

    });
    it('should return the cost for one sms made' , function(){
        var instances = FactoryCalculateBIll();

        instances.check("sms");
        assert.equal(instances.total(),"0.75");

    });
    it('should exceede 20% and indicate a warning level' , function(){
        var instances = FactoryCalculateBIll();

        instances.check("call");
        instances.check("call");
        instances.check("call");
        instances.check("call");
        instances.check("call");
        instances.check("call");
        instances.check("call");
        instances.check("call");
        instances.check("call");
        assert.equal(instances.total(),"24.75");

    });

});