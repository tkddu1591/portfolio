package com.example.back.repository;

import com.example.back.entity.HistoryEntity;
import com.example.back.entity.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryRepository extends JpaRepository<HistoryEntity, Integer> {
    List<HistoryEntity> findAllByOrderByHistoryNoDesc();
}
