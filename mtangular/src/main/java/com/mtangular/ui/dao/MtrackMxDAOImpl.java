package com.mtangular.ui.dao;

import java.lang.reflect.Field;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.CriteriaQuery;
import org.hibernate.criterion.Restrictions;
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
import com.mtangular.ui.utils.MCommonUtils;
import com.mtangular.ui.utils.RecordStatus;
import com.mtangular.ui.utils.ReturnStatus;
import com.mtrack.murupakkam.core.model.Mbasemodel;
import com.mtrack.murupakkam.model.MtrackUser;
import com.mtrack.murupakkam.model.Mtrackcategory;
import com.mtrack.murupakkam.model.Mtrackpost;
import com.mtrack.murupakkam.model.Mtrackpostview;
import com.mtrack.murupakkam.model.Quotes;

@Repository
public class MtrackMxDAOImpl extends DAOBase{


	public List<Quotes> retriveAllQuotes() throws Exception
	{
		Criteria criteria =(Criteria) getSessionFactory().openSession()
				.createCriteria(Quotes.class).add(Restrictions.eq("status",RecordStatus.ACTIVE.getStatus()));
		
		return criteria.list();
	}

	public String addQuotes(Quotes quotes) throws HibernateException, Exception
	{			
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		quotes.setCreateddate(new Date(new java.util.Date().getTime()));
		quotes.setModifieddate(new Date(new java.util.Date().getTime()));
		session.save(quotes);
		txn.commit();
		return quotes.toString();	
	}

	public String updateQuotes(Quotes quotes) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		quotes.setModifieddate(new Date(new java.util.Date().getTime()));
		session.update(quotes);
		txn.commit();
		return quotes.toString();		
	}

	public String deleteQuotes(int id) throws HibernateException, Exception
	{
		Session session=	getSessionFactory().openSession();		
		Transaction txn=	session.beginTransaction();
		Quotes quotes=session.get(Quotes.class, id);		
		quotes.setStatus(RecordStatus.DELETE.getStatus());
		session.update(quotes);
		//session.delete(quotes);
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
		obj.setStatus(RecordStatus.DELETE.getStatus());
		session.update(obj);
		//session.delete(obj);
		txn.commit();
		return obj.toString();

	}

	public List<Mtrackpost> retriveAllPost() throws Exception
	{
		Criteria criteria =(Criteria) getSessionFactory().openSession().createCriteria(Mtrackpost.class)
				.add(Restrictions.eq("status",RecordStatus.ACTIVE.getStatus()));
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
		obj.setCreateddate(new Date(new java.util.Date().getTime()));
		obj.setModifieddate(new Date(new java.util.Date().getTime()));
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
		obj.setModifieddate(new Date(new java.util.Date().getTime()));
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
		//session.delete(obj);
		//session.delete(obj.getPostinfo());
		Mtrackpostview postview=	obj.getPostinfo();
		postview.setStatus(RecordStatus.DELETE.getStatus());
		obj.setStatus(RecordStatus.DELETE.getStatus());
		session.update(postview);
		session.update(obj);
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
		obj.setStatus(RecordStatus.DELETE.getStatus());
		session.update(obj);
		//session.delete(obj);
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
		System.out.println("user  "+obj.getUsername() + obj.getPassword());	
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

	Integer count=0;
	List<Object> sqlparm=new ArrayList<>();
	public Object searchPost(Mtrackpost obj) throws HibernateException, Exception {
		List<Mtrackpost> list=new ArrayList<>();
		String query="select * from MTRACKPOST p,MTRACKPOSTVIEW pv where p.postid=pv.postid and  p.status=1";
		count=0;
		query= generateWhere(obj, query);
		if(count>0)
		{
			Session session=	getSessionFactory().openSession();		
			Transaction txn=	session.beginTransaction();
			SQLQuery sqlquery=  session.createSQLQuery(query);
			int i=0;
			while(i<sqlparm.size())
			{
				sqlquery.setString(i, (String) sqlparm.get(i));
				i++;
			}
			list=sqlquery.addEntity(Mtrackpost.class).list();

			txn.commit();
		}
		if(list!=null && list.isEmpty())
			throw new Exception("No Record Found");

		return list;
	}


	private String generateWhere(Mtrackpost obj,String sql)
	{
		String finalsql="";
		StringBuilder sb=new StringBuilder();
		sqlparm.clear();
		if(obj.getPosttitle()!=null && !"".equals(obj.getPosttitle()))
		{
			sb.append(" and POSTTITLE like ?");
			sqlparm.add(obj.getPosttitle()+"%");
			count++;
		}

		if(obj.getPosttitle2()!=null && !"".equals(obj.getPosttitle2()))
		{	sb.append(" and POSTTITLE2 like ?");
		sqlparm.add(obj.getPosttitle2()+"%");	
		count++;
		}

		if(obj.getPostinfo()!=null && obj.getPostinfo().getPostviewdesc()!=null  && !"".equals(obj.getPostinfo().getPostviewdesc()))
		{	sb.append(" and POSTVIEWDESC like ?");	
		sqlparm.add(obj.getPostinfo().getPostviewdesc()+"%");
		count++;
		}

		if((obj.getCreateddate()!=null && !"".equals(obj.getCreateddate())) && (obj.getModifieddate()!= null && !"".equals(obj.getCreateddate())) )
		{	
			sb.append(" and p.CREATEDDATE between  '"+obj.getCreateddate()+"' and  '"+obj.getModifieddate()+"'");
			count++;
		}
		else
		{

			if((obj.getCreateddate()!=null && !"".equals(obj.getCreateddate())) && (obj.getModifieddate()== null || "".equals(obj.getCreateddate())) )
			{	
				sb.append(" and p.CREATEDDATE >= '"+obj.getCreateddate()+"'");
				count++;
			}
			
			if((obj.getCreateddate()==null || "".equals(obj.getCreateddate())) && (obj.getModifieddate()!= null && !"".equals(obj.getCreateddate())) )
			{	
				sb.append(" and p.CREATEDDATE <= '"+obj.getModifieddate()+"'");
				count++;
			}
		}

		finalsql=sql+sb.toString();

		return finalsql;
	}

	public Object postcatRetriveAll() throws HibernateException, Exception {
		Criteria criteria =(Criteria) getSessionFactory().openSession().createCriteria(Mtrackcategory.class)
				.add(Restrictions.eq("status",RecordStatus.ACTIVE.getStatus()));
		try {
			return criteria.list();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	int qcount=0;
	public Object searchQuotes(Quotes obj) throws HibernateException, Exception {
		String query="select * from Quotes where status="+RecordStatus.ACTIVE.getStatus();		
		qcount=0;
		query= quoteGenerateWhere(obj, query);
		List<Object> list = null;
		if(qcount>0)
		{
			Session session=	getSessionFactory().openSession();		
			Transaction txn=	session.beginTransaction();
			SQLQuery sqlquery=  session.createSQLQuery(query);
			int i=0;
			while(i<sqlparm.size())
			{
				sqlquery.setString(i, (String) sqlparm.get(i));
				i++;
			}
			list=sqlquery.addEntity(Quotes.class).list();

			txn.commit();
		}
		if(list!=null && list.isEmpty())
			throw new Exception("No Record Found");

		return list;
	}
	
	private String quoteGenerateWhere(Quotes obj,String sql)
	{
		String finalsql="";
		StringBuilder sb=new StringBuilder();
		
		if(obj.getQuotedesc()!=null && !"".equals(obj.getQuotedesc()))
		{
			sb.append(" and QUOTEDESC like "+"'%"+obj.getQuotedesc()+"%'");
			qcount++;
		}

		
		if((obj.getCreateddate()!=null && !"".equals(obj.getCreateddate())) && (obj.getModifieddate()!= null && !"".equals(obj.getCreateddate())) )
		{	
			sb.append(" and CREATEDDATE between  '"+obj.getCreateddate()+"' and  '"+obj.getModifieddate()+"'");
			qcount++;
		}
		else
		{

			if((obj.getCreateddate()!=null && !"".equals(obj.getCreateddate())) && (obj.getModifieddate()== null || "".equals(obj.getCreateddate())) )
			{	
				sb.append(" and CREATEDDATE >= '"+obj.getCreateddate()+"'");
				qcount++;
			}
			
			if((obj.getCreateddate()==null || "".equals(obj.getCreateddate())) && (obj.getModifieddate()!= null && !"".equals(obj.getCreateddate())) )
			{	
				sb.append(" and CREATEDDATE <= '"+obj.getModifieddate()+"'");
				qcount++;
			}
		}

		finalsql=sql+sb.toString();

		return finalsql;
	}



}
