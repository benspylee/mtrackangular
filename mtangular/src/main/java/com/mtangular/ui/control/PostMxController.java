package com.mtangular.ui.control;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mtangular.ui.core.ControlBase;
import com.mtrack.murupakkam.core.model.Mbasemodel;
import com.mtrack.murupakkam.core.model.ResponseWrap;

@RestController
public class PostMxController extends ControlBase {
	
	@RequestMapping(path="/posts",method=RequestMethod.GET)
	public ResponseWrap<?> retriveAll()
	{
		return null;
		
	}
	
	@RequestMapping(path="/posts/{id}",method=RequestMethod.GET)
	public ResponseWrap<?> retriveById(@PathVariable int id)
	{
		return null;
	}
	
	@RequestMapping(path="/posts",method=RequestMethod.POST)
	public ResponseWrap<?> add(Mbasemodel obj)
	{
		return null;
		
	}
	
	@RequestMapping(path="/posts/{id}",method=RequestMethod.POST)
	public ResponseWrap<?> update(Mbasemodel obj)
	{
		return null;
		
	}
	
	@RequestMapping(path="/posts/{id}",method=RequestMethod.DELETE)
	public ResponseWrap<?> delete(@PathVariable int id)
	{
		return null;
	}
	
	
	

}