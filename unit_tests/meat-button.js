var assert = chai.assert;
let component;
let sr; 

beforeEach(() => { 
    comp = document.createElement('meat-button');
    comp.setAttribute("color", 'green');
    sr = comp.shadowRoot; 
    document.body.append(comp);
})
describe('meat-button basic requirements', function() { 
    it ("Component should exist", function() { 
        assert.isDefined(comp);
    })
    it ("Shadowroot should exist", function() { 
        assert.isDefined(sr);
    })
}); 
describe('Meat-Button Color Functionality', function() { 

    it ("it should be green", function(done) { 
      this.timeout(3000);
      setTimeout(function(){
        sr = comp.shadowRoot; 
        document.body.append(comp);
        const green_inner = sr.querySelector("button");
        const hi = getComputedStyle(green_inner).borderColor;
        assert.equal(hi, "rgb(89, 192, 64)");
        done();
      },2000);
    })
  }); 
  describe('THIS TEST SHOULD FAIL', function() { 

    it ("it should be green", function(done) { 
      this.timeout(3000);
      setTimeout(function(){
        sr = comp.shadowRoot; 
        document.body.append(comp);
        const green_inner = sr.querySelector("button");
        const hi = getComputedStyle(green_inner).borderColor;
        assert.equal(hi, "rgb(89, 1d92, 64)");
        done();
      },2000);
    })
  }); 
  
describe('meat-button existence', function() { 
    /* Check if ShadowRoot Exists */ 
    it ("shadowDOM should exist",function(done) { 
      this.timeout(3000);
      setTimeout(function(){
        sr = comp.shadowRoot; 
        document.body.append(comp);
        const green_inner = sr.querySelector("button");
        assert.equal(sr instanceof ShadowRoot, true);
        done();
      },2000);
    })  
});

describe('meat-button existence', function() { 
  /* Check if ShadowRoot Exists */ 
  it ("should have no innerHTML",function(done) { 
    this.timeout(3000);
    setTimeout(function(){
      sr = comp.shadowRoot; 
      document.body.append(comp);
      const green_inner = sr.querySelector("button");
      assert.equal(sr.getElementById('button').innerHTML, "");
      done();
    },2000);
  })
});

describe('meat-button basic requirements', function(done) { 
    /* Check Tag Name */ 
    it ("should have tag named MEAT-BUTTON", function() { 
      let tagName = comp.tagName;
      assert.equal(tagName, 'MEAT-BUTTON');
    })
  
     /* Check Tag Name */ 
    it ("should have tag named MEAT-BUTTON", function() { 
      let tagName = comp.tagName;
      assert.notEqual(tagName, 'CORE-HELLO');
    })
  
      /* Test color attribute exists */ 
      it ("should have color attribute", function() { 
        comp.setAttribute("color", '');
        assert.equal(comp.hasAttribute("color"), true);
      })
  
      /* Test type attribute exists */ 
      it ("should have type attribute", function() { 
        comp.setAttribute("type", '');
        assert.equal(comp.hasAttribute("type"), true);
      })
      /* Test color attribute exists */ 
      it ("should have size attribute", function() { 
          comp.setAttribute("size", '');
          assert.equal(comp.hasAttribute("size"), true);
      })
      /* Test color attribute exists */ 
      it ("should have circle attribute", function() { 
          comp.setAttribute("circle", '');
           assert.equal(comp.hasAttribute("circle"), true);
      })
      /* Test color attribute exists */ 
      it ("should have type attribute", function() { 
          comp.setAttribute("type", '');
          assert.equal(comp.hasAttribute("type"), true);
        })
      /* Test color attribute exists */ 
      it ("should have round attribute", function() { 
          comp.setAttribute("round", '');
          assert.equal(comp.hasAttribute("round"), true);
        })
      /* Test color attribute exists */ 
      it ("should have size attribute", function() { 
          comp.setAttribute("size", '');
          assert.equal(comp.hasAttribute("size"), true);
        })
      /* Test color attribute exists */ 
      it ("should have disabled attribute", function() { 
          comp.setAttribute("disabled", '');
          assert.equal(comp.hasAttribute("disabled"), true);
        })
  }); 
  
  
  
  describe('core-hello Rainbow Functionality', function() { 
    /* Test rainbow attribute exists */ 
    it ("should have rainbow attribute", function() { 
      comp.setAttribute("rainbow", '');
      assert.equal(comp.hasAttribute("rainbow"), true);
    })
  }); 
  
  describe('CSS tests', function() { 
    /* Test color styling */ 
    it ("Text should turn white when adding color to style", function() { 
      comp.style.color = "white"
      assert.equal(comp.style.color, "white");
    })
    /* Test font styling */ 
    it ("Text should change font to Montserrat", function() { 
      comp.style.fontFamily = "Montserrat";
      assert.equal(comp.style.fontFamily, "Montserrat");
    })
  
    /* Test font size styling */ 
    it ("Text should change font size to 30px", function() { 
      comp.style.fontSize = "30px";
      assert.equal(comp.style.fontSize, "30px");
    })
  
      /* Test center styling */ 
      it ("Text should be centered when changing textAlign", function() { 
        comp.style.textAlign = "center";
        assert.equal(comp.style.textAlign, "center");
      })
  }); 
  