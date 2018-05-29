package com.mtangular.ui.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.CriteriaQuery;
import org.hibernate.query.criteria.internal.CriteriaQueryImpl;
import org.springframework.stereotype.Repository;

import com.mtangular.ui.core.DAOBase;
import com.mtangular.ui.utils.ReturnStatus;
import com.mtrack.murupakkam.core.model.Mbasemodel;
import com.mtrack.murupakkam.model.Mtrackpostview;
import com.mtrack.murupakkam.model.Quotes;

@Repository
public class MtrackMxDAOImpl extends DAOBase{


	public List<Quotes> retriveAllQuotes() throws Exception
	{
		Criteria criteria =(Criteria) getSessionFactory().openSession().createCriteria(Quotes.class);
		return criteria.list();
	}

	public String addQuotes(Quotes quotes) throws HibernateException, Exception
	{			
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		session.save(quotes);
		txn.commit();
		return quotes.toString();	
	}

	public String updateQuotes(Quotes quotes) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		session.update(quotes);
		txn.commit();
		return quotes.toString();		
	}

	public String deleteQuotes(int id) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		Quotes quotes=session.get(Quotes.class, id);		
		session.delete(quotes);
		txn.commit();
		return quotes.toString();

	}


	public List<Mtrackpostview> retriveAllPostview() throws Exception
	{
		Criteria criteria =(Criteria) getSessionFactory().openSession().createCriteria(Mtrackpostview.class);
		return criteria.list();
	}

	public String addPostview(Mtrackpostview obj) throws HibernateException, Exception
	{			
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		session.save(obj);
		txn.commit();
		return obj.toString();	
	}

	public String updatePostview(Mtrackpostview obj) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		session.update(obj);
		txn.commit();
		return obj.toString();		
	}

	public String deletePostview(int id) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		Mtrackpostview obj=session.get(Mtrackpostview.class, id);		
		session.delete(obj);
		txn.commit();
		return obj.toString();

	}

}
