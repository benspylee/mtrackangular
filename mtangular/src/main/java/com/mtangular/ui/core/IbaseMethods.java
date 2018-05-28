package com.mtangular.ui.core;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mtrack.murupakkam.core.model.Mbasemodel;
import com.mtrack.murupakkam.core.model.ResponseWrap;

public interface IbaseMethods {
	
	public static String classname="";
	
	//@RequestMapping(path="/"+classname,method=RequestMethod.GET)
	public ResponseWrap<?> retriveAll();
	
	
	//@RequestMapping(path="/"+classname+"/{id}",method=RequestMethod.GET)
	public ResponseWrap<?> retriveById(@PathVariable int id);
	
	
	//@RequestMapping(path="/"+classname,method=RequestMethod.POST)
	public ResponseWrap<?> add(Mbasemodel obj);
	
	
	//@RequestMapping(path="/"+classname+"/{id}",method=RequestMethod.POST)
	public ResponseWrap<?> update(Mbasemodel obj);
	
	
	//@RequestMapping(path="/"+classname+"/{id}",method=RequestMethod.DELETE)
	public ResponseWrap<?> delete(@PathVariable int id);
	
	

}
