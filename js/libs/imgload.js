//function imgRequest(imgids,success,err){
//		getdata('GetImgs','get',{imgids:imgids},false,success,err)
//	
//	
//}
//
//function postImgId(imgids){
//	var imgload=[];
//	var obj={};
//	setTimeout(function(){
//	imgRequest(imgids,function(result){
//		if(result.succeed=="True"){
//			$.each(result.data, function(index,val) {
//				obj.id=val.imgid;
//				obj.imgurl="data:image/png;base64,"+val.photo;
//				imgload.push(obj);
//				obj={};
//			});
//			
//			
//		}else{
//			console.log(JSON.stringify(result));
////			return imgload;
//		}
//	},function(err){
//		
//	})
////	console.log(imgload)
//	
//	})
//	return imgload;
//}
//
//function getAttr(arr,attr1){
//	var newarr=[];
//	setTimeout(function(){
//		$.each(arr,function(index,val){
//			newarr.push(val[attr1]);
//		})
////		console.log(newarr)
//	})
//	
//	return newarr;
//}
//
//function getVal(arr1,arr2,attr1){
//	$.each(arr1, function(index,val) {
//		$("."+val+" img").attr("src",arr2[index][attr1]);
//	});
//}
//
//function getIndex(arr,val1,val2,val3){
//	var newarr=[];
//	
//	$.each(arr, function(index,val) {
////			console.log(index,val)
//		if(val[val1]==val2){
//			
//			newobj.id=val["id"];
//			newobj.vals=val[val3];
//			newarr.push(newobj);
//			newobj={};
//		}	
//	});
////		console.log(newarr)
//	return newarr;
//}

function postImgArr(arr){
	var str='';
	var res=[];
	$.each(arr, function(index,val) {
		str+=val+'^';
	});
	str=str.slice(0,-1);
//	console.log(str)
	getdata('GetImgs','get',{imgids:str},true,function(succ2){
		if(succ2.success==true){
			console.log(succ2)
			$.each(succ2.body,function(index,val){
				res.push('data:image/png;base64,'+val.photo)
			})
		}else{
			
		}
	},function(err){})
	return res;
}
