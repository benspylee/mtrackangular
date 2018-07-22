package com.mtangular.ui.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mtangular.ui.core.ControlBase;
import com.mtangular.ui.service.MtrackMxService;
import com.mtrack.murupakkam.core.model.ResponseWrap;
import com.mtrack.murupakkam.model.Mtrackpost;

@RestController
public class PostMxController extends ControlBase<Mtrackpost> {

	@Autowired
	private MtrackMxService mtrackMxService;
	
	@RequestMapping(path="/posts",method=RequestMethod.GET)
	public ResponseWrap<?> retriveAll()
	{
		try {
			return (ResponseWrap<?>) mtrackMxService.retriveAllPost();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
	
	@RequestMapping(path="/posts/{id}",method=RequestMethod.GET)
	public ResponseWrap<?> retriveById(@PathVariable int id)
	{
		return null;
	}
	
	@RequestMapping(path="/posts",method=RequestMethod.POST)
	public ResponseWrap<?> add(@RequestBody Mtrackpost obj)
	{
		return (ResponseWrap<?>) mtrackMxService.addPost(obj);
		
	}
	
	@RequestMapping(path="/posts/{id}",method=RequestMethod.POST)
	public ResponseWrap<?> update(@RequestBody Mtrackpost obj)
	{
			return (ResponseWrap<?>) mtrackMxService.updatePost(obj);
		
	}
	
	@RequestMapping(path="/posts/{id}",method=RequestMethod.DELETE)
	public ResponseWrap<?> delete(@PathVariable int id)
	{
		return (ResponseWrap<?>) mtrackMxService.deletePost(id);
	}
	
	@RequestMapping(path="/posts/search",method=RequestMethod.POST)
	public ResponseWrap<?> search(@RequestBody Mtrackpost obj)
	{
		return (ResponseWrap<?>) mtrackMxService.searchPost(obj);
	}
	
	@RequestMapping(path="/postcategory",method=RequestMethod.GET)
	public ResponseWrap<?> postcatRetriveAll()
	{
		try {
			return (ResponseWrap<?>) mtrackMxService.postcatRetriveAll();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
	
}
