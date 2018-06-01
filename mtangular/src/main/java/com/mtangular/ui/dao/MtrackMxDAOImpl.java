package com.mtangular.ui.dao;

import java.lang.reflect.Field;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.CriteriaQuery;
import org.hibernate.engine.spi.LoadQueryInfluencers;
import org.hibernate.engine.spi.SessionFactoryImplementor;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.internal.CriteriaImpl;
import org.hibernate.internal.SQLQueryImpl;
import org.hibernate.internal.SessionImpl;
import org.hibernate.loader.OuterJoinLoader;
import org.hibernate.loader.criteria.CriteriaJoinWalker;
import org.hibernate.loader.criteria.CriteriaLoader;
import org.hibernate.loader.criteria.CriteriaQueryTranslator;
import org.hibernate.persister.entity.OuterJoinLoadable;
import org.springframework.jdbc.object.SqlQuery;
import org.springframework.stereotype.Repository;

import com.mtangular.ui.core.DAOBase;
import com.mtangular.ui.utils.RecordStatus;
import com.mtangular.ui.utils.ReturnStatus;
import com.mtrack.murupakkam.core.model.Mbasemodel;
import com.mtrack.murupakkam.model.MtrackUser;
import com.mtrack.murupakkam.model.Mtrackpost;
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

	public List<Mtrackpost> retriveAllPost() throws Exception
	{
		Criteria criteria =(Criteria) getSessionFactory().openSession().createCriteria(Mtrackpost.class);
		/* CriteriaImpl c = (CriteriaImpl) criteria;
		  SessionImpl s = (SessionImpl) c.getSession();
		  SessionFactoryImplementor factory = (SessionFactoryImplementor) s.getSessionFactory();
		  String[] implementors = factory.getImplementors(c.getEntityOrClassName());
		  LoadQueryInfluencers lqis = new LoadQueryInfluencers();
		  CriteriaLoader loader = new CriteriaLoader((OuterJoinLoadable) factory.getEntityPersister(implementors[0]), factory, c, implementors[0], lqis);
		  Field f = OuterJoinLoader.class.getDeclaredField("sql");
		  f.setAccessible(true);
		  String sql = (String) f.get(loader);
	*/	  

		try {
			return criteria.list();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	public String addPost(Mtrackpost obj) throws HibernateException, Exception
	{			
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		session.save(obj);
		Mtrackpostview postview=	obj.getPostinfo();
		postview.setPostid(obj.getPostid());
		session.save(postview);
		//obj.setPostinfo(postview);
		//obj.setPostid(postview.getPostid());
		
		txn.commit();
		return obj.toString();	
	}

	public String updatePost(Mtrackpost obj) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		//session.update(obj);
		Mtrackpostview postview=	obj.getPostinfo();
		session.update(postview);
	//	obj.setPostinfo(postview);
	//	obj.setPostid(postview.getPostid());
		session.update(obj);
		txn.commit();
		return obj.toString();		
	}

	public String deletePost(int id) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		Mtrackpost obj=session.get(Mtrackpost.class, id);		
		session.delete(obj);
		session.delete(obj.getPostinfo());
		txn.commit();
		return obj.toString();

	}
	
	

	public List<MtrackUser> retriveAllMtrackUser() throws Exception
	{
		Criteria criteria =(Criteria) getSessionFactory().openSession().createCriteria(MtrackUser.class);
		return criteria.list();
	}

	public String addMtrackUser(MtrackUser obj) throws HibernateException, Exception
	{			
			Session session=	getSessionFactory().openSession();		
			Transaction txn=	session.beginTransaction();
			session.save(obj);
			txn.commit();
			return obj.toString();	
	}
	
	public String updateMtrackUser(MtrackUser obj) throws HibernateException, Exception
	{
			Session session=	getSessionFactory().openSession();		
			Transaction txn=	session.beginTransaction();
			session.update(obj);
			txn.commit();
			return obj.toString();		
	}
	
	public String deleteMtrackUser(int id) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		MtrackUser obj=session.get(MtrackUser.class, id);		
		session.delete(obj);
		txn.commit();
		return obj.toString();
	
	}
	
	public MtrackUser authenticateUser(MtrackUser obj) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		SQLQuery query=  session.createSQLQuery("select * from MTRACK_USER  where username=? and password=? and status=?");
		query.setString(0, obj.getUsername());
		query.setString(1, obj.getPassword());
		query.setInteger(2,RecordStatus.ACTIVE.getStatus());
		List<MtrackUser> list=query.addEntity(MtrackUser.class).list();
		txn.commit();
		if(list.size()>0)
		{
			MtrackUser user=list.get(0);
			user.setPassword("");
			return user;
		}
		else
			throw new Exception("Invalid Credentials");
		
	}
	
	

}
