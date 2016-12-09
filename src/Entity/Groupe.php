<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\IGroup;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="groupe")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\GroupeRepository")
 */
class Groupe extends EntityAbstract implements IGroup
{
    /**
     * @var int
     *
     * @Column(name="id", type="integer")
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $id;


    /**
     * @var string
     *
     * @Column(name="title", type="string", length=100)
     */
    private $title;

    /**
     * @var string
     *
     * @Column(name="flag", type="string", length=100)
     */
    private $flag;

    /**
     * @var string
     *
     * @Column(name="color", type="string", length=100, nullable=true)
     */
    private $color;

    public function getFlag() {
        return $this->flag;
    }


        /**
         * Get id
         *
         * @return integer
         */
        public function getId()
        {
            return $this->id;
        }

        /**
         * Set title
         *
         * @param string $title
         *
         * @return Groupe
         */
        public function setTitle($title)
        {
            $this->title = $title;

            return $this;
        }

        /**
         * Get title
         *
         * @return string
         */
        public function getTitle()
        {
            return $this->title;
        }

        /**
         * Set color
         *
         * @param string $color
         *
         * @return Groupe
         */
        public function setColor($color)
        {
            $this->color = $color;

            return $this;
        }

        /**
         * Get color
         *
         * @return string
         */
        public function getColor()
        {
            return $this->color;
        }
}
