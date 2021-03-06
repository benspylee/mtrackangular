package com.mtangular.ui.service;

import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mtangular.ui.core.ServiceBase;
import com.mtangular.ui.dao.MtrackMxDAOImpl;
import com.mtrack.murupakkam.core.model.ResponseWrap;
import com.mtrack.murupakkam.model.MtrackUser;
import com.mtrack.murupakkam.model.Mtrackpost;
import com.mtrack.murupakkam.model.Mtrackpostview;
import com.mtrack.murupakkam.model.Quotes;


@Service
public class MtrackMxService extends ServiceBase {

	@Autowired
	private MtrackMxDAOImpl mtrackMxDAOImpl;

	public ResponseWrap<?> retriveAllQuotes()
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.retriveAllQuotes());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> addQuotes(Quotes quotes)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.addQuotes(quotes));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}


	public ResponseWrap<?> updateQuotes(Quotes quotes)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.updateQuotes(quotes));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> deleteQuotes(int id)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.deleteQuotes(id));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}


	public ResponseWrap<?> retriveAllPostview()
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.retriveAllPostview());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> addPostview(Mtrackpostview obj)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.addPostview(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}


	public ResponseWrap<?> updatePostview(Mtrackpostview obj)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.updatePostview(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> deletePostview(int id)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.deletePostview(id));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> retriveAllPost()
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.retriveAllPost());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> addPost(Mtrackpost obj)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.addPost(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}


	public ResponseWrap<?> updatePost(Mtrackpost obj)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.updatePost(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> deletePost(int id)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.deletePost(id));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}


	public ResponseWrap<?> retriveAllMtrackUser()
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.retriveAllMtrackUser());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> addMtrackUser(MtrackUser obj)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.addMtrackUser(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}


	public ResponseWrap<?> updateMtrackUser(MtrackUser obj)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.updateMtrackUser(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> deleteMtrackUser(int id)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.deleteMtrackUser(id));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}
	
	public ResponseWrap<?> authenticateUser(MtrackUser obj)
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.authenticateUser(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> searchPost(Mtrackpost obj) {
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.searchPost(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}

	public ResponseWrap<?> postcatRetriveAll() {
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.postcatRetriveAll());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}
	}

	public ResponseWrap<?> searchQuotes(Quotes obj) {
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.searchQuotes(obj));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}
	}

	
	
}
