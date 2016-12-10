<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\IUser;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="reservation")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\ReservationRepository")
 */
class Reservation extends EntityAbstract
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
     * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\User")
     */
    private $owner;
    public function setOwner($u) {
        $this->owner = $u;
    }
    public function getOwner() {
        return $this->owner;
    }

    /**
     * @ManyToMany(targetEntity="Lim\MoreSalle\Entity\Fichier")
     * @JoinTable(name="ressource_fichiers",
     *      joinColumns={@\Doctrine\ORM\Mapping\JoinColumn(name="ressource_id", referencedColumnName="id")},
     *      inverseJoinColumns={@\Doctrine\ORM\Mapping\JoinColumn(name="fichier_id", referencedColumnName="id", unique=true)}
     *      )
     */
     private $ressource_Fichier;
    /**
     * @ManyToMany(targetEntity="Lim\MoreSalle\Entity\Groupe")
     * @JoinTable(name="groupe_targeted",
     *      joinColumns={@\Doctrine\ORM\Mapping\JoinColumn(name="reservation_id", referencedColumnName="id")},
     *      inverseJoinColumns={@\Doctrine\ORM\Mapping\JoinColumn(name="groupe_id", referencedColumnName="id", unique=true)}
     *      )
     */
     private $groupe_targeted;
     /**
      * @OneToMany(targetEntity="LIM\MoreSalle\Entity\ReservationRessource", mappedBy="reservation", cascade={"persist", "remove"})
      */
     private $reservationRessource;
     public function getReservationRessource() {
         return $this->reservationRessource;
     }
     /**
      * @var int
      *
      * @Column(name="start", type="datetime")
      */
     private $start;
     /**
      * @var int
      *
      * @Column(name="end", type="datetime")
      */
     private $end;

    /**
     * @var string
     *
     * @Column(name="title", type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @var int
     *
     * @Column(name="created", type="datetime", nullable=true)
     */
    private $created;
    /**
     * @var int
     *
     * @Column(name="updated", type="datetime", nullable=true)
     */
    private $updated;
    /**
     * @var int
     *
     * @Column(name="validationprovider", type="smallint")
     */
    private $validationprovider = false;
    /**
     * @var int
     *
     * @Column(name="validationclient", type="smallint")
     */
    private $validationclient = false;

    /**
     * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\Devis")
     */
    private $devis;
    public function setDevis($d){
        $this->devis = $d;
    }
    public function getDevis() {
        return $this->devis;
    }
    /**
     * @var int
     *
     * @Column(name="comment", type="text", nullable=true)
     */
    private $comment;


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
         * Set start
         *
         * @param \DateTime $start
         *
         * @return Reservation
         */
        public function setStart($start)
        {
            $this->start = $start;

            return $this;
        }

        /**
         * Get start
         *
         * @return \DateTime
         */
        public function getStart()
        {
            return $this->start;
        }

        /**
         * Set end
         *
         * @param \DateTime $end
         *
         * @return Reservation
         */
        public function setEnd($end)
        {
            $this->end = $end;

            return $this;
        }

        /**
         * Get end
         *
         * @return \DateTime
         */
        public function getEnd()
        {
            return $this->end;
        }

        /**
         * Set title
         *
         * @param string $title
         *
         * @return Reservation
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
         * Set created
         *
         * @param \DateTime $created
         *
         * @return Reservation
         */
        public function setCreated($created)
        {
            $this->created = $created;

            return $this;
        }

        /**
         * Get created
         *
         * @return \DateTime
         */
        public function getCreated()
        {
            return $this->created;
        }

        /**
         * Set updated
         *
         * @param \DateTime $updated
         *
         * @return Reservation
         */
        public function setUpdated($updated)
        {
            $this->updated = $updated;

            return $this;
        }

        /**
         * Get updated
         *
         * @return \DateTime
         */
        public function getUpdated()
        {
            return $this->updated;
        }

        /**
         * Set validationprovider
         *
         * @param $validationprovider
         *
         * @return Reservation
         */
        public function setValidationprovider($validationprovider)
        {
            $this->validationprovider = $validationprovider;

            return $this;
        }

        /**
         * Get validationprovider
         *
         * @return \tinyint
         */
        public function getValidationprovider()
        {
            return $this->validationprovider;
        }

        /**
         * Set validationclient
         *
         *
         * @return Reservation
         */
        public function setValidationclient($validationclient)
        {
            $this->validationclient = $validationclient;

            return $this;
        }

        /**
         * Get validationclient
         *
         * @return \tinyint
         */
        public function getValidationclient()
        {
            return $this->validationclient;
        }

        /**
         * Set comment
         *
         * @param string $comment
         *
         * @return Reservation
         */
        public function setComment($comment)
        {
            $this->comment = $comment;

            return $this;
        }

        /**
         * Get comment
         *
         * @return string
         */
        public function getComment()
        {
            return $this->comment;
        }

        /**
         * Add ressourceFichier
         *
         * @param \Lim\MoreSalle\Entity\Fichier $ressourceFichier
         *
         * @return Reservation
         */
        public function addRessourceFichier($ressourceFichier)
        {
            $this->ressource_Fichier[] = $ressourceFichier;

            return $this;
        }

        /**
         * Remove ressourceFichier
         *
         * @param \Lim\MoreSalle\Entity\Fichier $ressourceFichier
         */
        public function removeRessourceFichier($ressourceFichier)
        {
            $this->ressource_Fichier->removeElement($ressourceFichier);
        }

        /**
         * Get ressourceFichier
         *
         * @return \Doctrine\Common\Collections\Collection
         */
        public function getRessourceFichier()
        {
            return $this->ressource_Fichier;
        }

        /**
         * Add groupeTargeted
         *
         * @param \Lim\MoreSalle\Entity\Groupe $groupeTargeted
         *
         * @return Reservation
         */
        public function addGroupeTargeted($groupeTargeted)
        {
            $this->groupe_targeted[] = $groupeTargeted;

            return $this;
        }

        /**
         * Remove groupeTargeted
         *
         * @param \Lim\MoreSalle\Entity\Groupe $groupeTargeted
         */
        public function removeGroupeTargeted($groupeTargeted)
        {
            $this->groupe_targeted->removeElement($groupeTargeted);
        }

        /**
         * Get groupeTargeted
         *
         * @return \Doctrine\Common\Collections\Collection
         */
        public function getGroupeTargeted()
        {
            return $this->groupe_targeted;
        }
}
