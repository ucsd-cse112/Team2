var assert = chai.assert;
let component;
let sr; 

before((done) => { 
    setTimeout(function(){
    comp = document.createElement('meat-button');
    document.body.append(comp);
    sr = comp.shadowRoot; 
      done();
    },1000);
});
describe('meat-button basic requirements', function() { 
    it ("Component should exist", function() { 
        assert.isDefined(comp);
    })
    it ("Shadowroot should exist", function() { 
        sr = comp.shadowRoot; 
        assert.isDefined(sr);
    }) 
  /* Check if ShadowRoot Exists */ 
  it ("shadowDOM should exist",function(done) { 
      sr = comp.shadowRoot; 
      assert.equal(sr instanceof ShadowRoot, true);
      done();
  })  
  it ("should have no innerHTML",function(done) { 
      assert.equal(sr.getElementById('button').innerHTML, "");
      done();
  })
});
describe('Tests meat-button disabled functionality', function() { 

    it ("should be that disabled is false when getter is called", function(done) { 
        assert.equal(comp.disabled, false);
        done();
    })
  it ("should be that setter to true causes disabled to be true", function(done) { 
      comp.disabled = true;
      assert.equal(comp.disabled, true);
      done();
  })
  it ("should be that setter to false causes disabled to be false", function(done) { 
      comp.disabled = false;
      assert.equal(comp.disabled, false);
      done();
  })
  it ("should be that assignment of attribute causes disabled to be true", function(done) { 
      comp.setAttribute("disabled", "");
      assert.equal(comp.disabled, true);
      done();
  })

  it ("should be that removing attribute causes disabled to be false", function(done) { 
      comp.removeAttribute("disabled", "");
      assert.equal(comp.disabled, false);
      done();
  })

}); 


describe('Tests meat-button size functionality', function() { 

  it ("should be that size is null when getter is initially called", function(done) { 
    assert.equal(comp.size, null);
    done();
})
it ("should be that setter to small causes getter to return small", function(done) { 
  comp.size = "small";
  assert.equal(comp.size, "small");
  done();
})

it ("should be that setter to medium causes getter to return medium", function(done) { 
  
  comp.size = "medium";
  assert.equal(comp.size, "medium");
  done();
})
it ("should be that setter to large causes getter to return large", function(done) { 
  comp.size = "large";
  assert.equal(comp.size, "large");
  done();
})

it ("should be that removal of attribute causes getter to be false", function(done) { 
  comp.removeAttribute("size", "");
  assert.equal(comp.size, null);
  done();
})
it ("should be that assignment to small causes getter to return small", function(done) { 
  comp.setAttribute("size", "small");
  assert.equal(comp.size, "small");
  done();
})
it ("should be that assignment to true causes disabled to be false", function(done) { 
  comp.setAttribute("size", "asdf");
  //document.body.append(comp);
  assert.equal(comp.size, "asdf");
  done();
})
it ("should be that assignment to large causes disabled to be false", function(done) { 
  comp.setAttribute("size", "large");
  assert.equal(comp.size, "large");
  done();
})
it ("it should be small", function(done) { 
  comp.size = "small";
  this.timeout(1000);
  setTimeout(function(){
    sr = comp.shadowRoot; 
    const green_inner = sr.querySelector("button");
    const hi = getComputedStyle(green_inner);
    assert.equal(hi.width, "80px");
    assert.equal(hi.height, "36px")
    done();
  },500);
})
it ("it should be medium", function(done) { 
  comp.size = "medium";
  this.timeout(1000);
  setTimeout(function(){
    sr = comp.shadowRoot; 
    const green_inner = sr.querySelector("button");
    const hi = getComputedStyle(green_inner);
    assert.equal(hi.width, "90px");
    assert.equal(hi.height, "40px")
    done();
  },500);
})
it ("it should be large", function(done) { 
  comp.size = "large";
  this.timeout(1000);
  setTimeout(function(){
    sr = comp.shadowRoot; 
    const green_inner = sr.querySelector("button");
    const hi = getComputedStyle(green_inner);
    assert.equal(hi.width, "100px");
    assert.equal(hi.height, "44px")
    done();
  },500);
})
it ("it should be defaulted", function(done) { 
  comp.size = "";
  this.timeout(1000);
  setTimeout(function(){
    sr = comp.shadowRoot; 
    const green_inner = sr.querySelector("button");
    const hi = getComputedStyle(green_inner);
    assert.equal(hi.width, "90px");
    assert.equal(hi.height, "40px")
    done();
  },500);
})
});
  describe('Tests meat-button color functionality', function() { 

    it ("it should be green", function(done) { 
      comp.color = 'green';
       this.timeout(1000);
       setTimeout(function(){
        sr = comp.shadowRoot; 
        //document.body.append(comp);
        const green_inner = sr.querySelector("button");
        const hi = getComputedStyle(green_inner).backgroundColor;
        assert.equal(hi, "rgb(89, 192, 64)");
        done();
       },500);
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
        //comp.setAttribute("color", '');
        assert.equal(comp.hasAttribute("color"), true);
      })
  
      /* Test type attribute exists */ 
      it ("should have type attribute", function() { 
        //comp.setAttribute("type", '');
        assert.equal(comp.hasAttribute("type"), true);
      })
      /* Test color attribute exists */ 
      it ("should have circle attribute", function() { 
          //comp.setAttribute("circle", '');
           assert.equal(comp.hasAttribute("circle"), true);
      })
      /* Test color attribute exists */ 
      it ("should have type attribute", function() { 
          //comp.setAttribute("type", '');
          assert.equal(comp.hasAttribute("type"), true);
        })
      /* Test color attribute exists */ 
      it ("should have round attribute", function() { 
         // comp.setAttribute("round", '');
          assert.equal(comp.hasAttribute("round"), true);
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
  describe('Tests meat-button clickability', function() { 

    it ("should be that an undisabled button is clickable (disabled clicking testing must be in codeclimate)", function(done) { 
      
        comp.disabled = false;
        clicked = false;
        comp.addEventListener("click", function(){
          clicked = true;
          console.log("clicked!");
        });
        comp.click();
        assert.equal(clicked, true);
        done();
    })
    // it ("should be that a disabled button is unclickable", function(done) { 
    //     comp.disabled = true;
    //     clicked = false;
    //     comp.click();
    //     document.body.append(comp);
    //     assert.equal(clicked, false);
    //     done();
    // })
    
    
    }); 
    
  