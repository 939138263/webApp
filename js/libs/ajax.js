function getdata(url,type,data,async,succ,err){
	var name='';
	var pass='';
	var headers={};
	if(url=='Login'){
		name=data.name;
		pass=data.pass;

	}else{
		name=localStorage.getItem('username');
		pass=localStorage.getItem('password');

	}
	var isasync=async||true;
	$.ajax('http://api.vrcapi.com/api/Cus/'+url,{
		data:data,
		dataType:'json',
		type:type,
		headers:{'name':name,'password':pass},
		success:function(succdata){
			succ(succdata);
		},
		error:function(errdata){
			err(errdata);
		},
		async:isasync
	})
}
function getmarketdata(url,type,data,async,succ,err){
	var name='';
	var pass='';
	var headers={};
	name=localStorage.getItem('username');
	pass=localStorage.getItem('password');
	var isasync=async||true;
	$.ajax('http://api.vrcapi.com/api/Market/'+url,{
		data:data,
		dataType:'json',
		type:type,
		headers:{'name':name,'password':pass},
		success:function(succdata){
			succ(succdata);
		},
		error:function(errdata){
			err(errdata);
		},
		async:isasync
	})
}
function getvrhdata(url,type,data,async,succ,err){
	var name='';
	var pass='';
	var headers={};
	name=localStorage.getItem('username');
	pass=localStorage.getItem('password');

	var isasync=async||true;
	$.ajax('http://api.vrcapi.com/api/Vrh/'+url,{
		data:data,
		dataType:'json',
		type:type,
		headers:{'name':name,'password':pass,lang:"CHS"},
		success:function(succdata){
			succ(succdata);
		},
		error:function(errdata){
			err(errdata);
		},
		async:isasync
	})
}
